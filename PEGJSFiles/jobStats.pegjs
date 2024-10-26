{
  // Initialize an empty object to store the results
  var result = {};
}

Start
  = Entries EOF { return result; }

Entries
  = (Entry)*

Entry
  = _ dataLine:DataLine { result[dataLine.id] = dataLine.values; }
  / _ Comment EndOfLine?
  / _ EndOfLine

DataLine
  = id:Number _ "," _ values:NumberList _ Comment? EndOfLine? {
      return { id: id, values: values };
    }

NumberList
  = first:Number rest:(_ "," _ Number)* {
      return [first].concat(rest.map(r => r[3]));
    }
  / empty:'' { return []; }

Number
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }

Comment
  = "//" (!EndOfLine .)*

EndOfLine
  = ("\r\n" / "\n" / "\r")

EOF
  = !.

_ "whitespace"
  = [ \t]*
