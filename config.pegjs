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
  = Object
  / Array
  / StringLiteral
  / NumberLiteral
  / ParenthesizedValue
  / Identifier

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

ParenthesizedValue
  = "(" _ val:Value _ ")" { return val; }

Array
  = "[" _ elements:ArrayElements? _ "]" {
      return elements || [];
    }

ArrayElements
  = head:ArrayElement tail:(_ "," _ ArrayElement)* {
      return [head].concat(tail.map(function(x) { return x[3]; }));
    }

ArrayElement
  = Value

StringLiteral
  = '"' chars:StringChars '"' {
      return chars;
    }

StringChars
  = chars:([^"\\] / EscapeSequence)* {
      return chars.join('');
    }

EscapeSequence
  = "\\" char:[\\'"bfnrt] {
      var map = { '\\': '\\', '"': '"', "'": "'", 'b': '\b', 'f': '\f', 'n': '\n', 'r': '\r', 't': '\t' };
      return map[char];
    }

NumberLiteral
  = digits:[0-9]+ ('.' [0-9]+)? {
      return parseFloat(text());
    }

Identifier
  = first:[a-zA-Z_] rest:[a-zA-Z0-9_]* {
      return first + rest.join('');
    }

_  // Whitespace and comments
  = (WhiteSpace / Comment)*

WhiteSpace
  = [ \t\n\r]+

Comment
  = "//" [^\n]* ("\n" / !.)
  / "/*" (!"*/" .)* "*/"
