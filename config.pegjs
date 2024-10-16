{
  // Helper function to build objects from property lists or definitions
  function makeObject(pairs) {
    var obj = {};
    pairs.forEach(function(p) {
      obj[p.key] = p.value;
    });
    return obj;
  }
}

start
  = _ definitions:DefinitionList _ { return makeObject(definitions); }

DefinitionList
  = head:Definition tail:(_ Definition)* {
      return [head].concat(tail.map(function(x) { return x[1]; }));
    }

Definition
  = name:Identifier _ ":" _ value:Value {
      return { key: name, value: value };
    }

Value
  = ParenthesizedValue
  / ParenthesizedList
  / Object
  / Array
  / StringLiteral
  / NumberLiteral
  / BooleanLiteral
  / Identifier

ParenthesizedValue
  = "(" _ val:Value _ ")" { return val; }

ParenthesizedList
  = "(" _ elements:ValueListWithOptionalTrailingComma? _ ")" {
      return elements || [];
    }

ValueListWithOptionalTrailingComma
  = head:Value tail:(ValueSeparator Value)* trailingComma:ValueSeparator? {
      var values = [head];
      for (var i = 0; i < tail.length; i++) {
        values.push(tail[i][1]);
      }
      return values;
    }

ValueSeparator
  = _ "," _

Object
  = "{" _ properties:PropertyList? _ "}" {
      return makeObject(properties || []);
    }

PropertyList
  = head:Property tail:(_ Property)* {
      return [head].concat(tail.map(function(x) { return x[1]; }));
    }

Property
  = key:Identifier _ ":" _ value:Value {
      return { key: key, value: value };
    }

Array
  = "[" _ elements:ArrayElementsWithOptionalTrailingComma? _ "]" {
      return elements || [];
    }

ArrayElementsWithOptionalTrailingComma
  = head:Value tail:(ValueSeparator Value)* trailingComma:ValueSeparator? {
      var values = [head];
      for (var i = 0; i < tail.length; i++) {
        values.push(tail[i][1]);
      }
      return values;
    }

StringLiteral
  = '"' chars:DoubleQuotedStringContent '"' {
      return chars.join('');
    }
  / '<"' chars:MultilineStringChars '">' {
      return chars;
    }

DoubleQuotedStringContent
  = chars:(
      [^"\\]     // Any character except double quote or backslash
    / EscapeSequence
    / "\\" .    // Backslash followed by any character
    )*

MultilineStringChars
  = chars:$((!('">') [^]))* { return chars; }

EscapeSequence
  = "\\" char:[\\'"bfnrt] {
      var map = { 
        '\\': '\\',
        '"': '"',
        "'": "'",
        'b': '\b',
        'f': '\f',
        'n': '\n',
        'r': '\r',
        't': '\t'
      };
      return map[char];
    }
  / "\\" char:. {
      // For any other escaped character, return the character as is
      return char;
    }

NumberLiteral
  = digits:[0-9]+ ('.' [0-9]+)? {
      return parseFloat(text());
    }

BooleanLiteral
  = "true" { return true; }
  / "false" { return false; }

Identifier
  = id:$([a-zA-Z_][a-zA-Z0-9_]*) {
      return id;
    }

_  // Whitespace and comments
  = (WhiteSpace / Comment)*

WhiteSpace
  = [ \t\n\r]+

Comment
  = "//" [^\n]* ("\n" / !.)
  / "/*" (!"*/" .)* "*/"
