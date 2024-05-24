// 12 Boolean Algebra Rules in Function Form
const rules = [
    { rule: "A + 0 = A", apply: expr => expr.replace(/(\w+)\+0/g, '$1') },
    { rule: "A * 1 = A", apply: expr => expr.replace(/(\w+)\*1/g, '$1') },
    { rule: "A + 1 = 1", apply: expr => expr.replace(/(\w+)\+1/g, '1') },
    { rule: "A * 0 = 0", apply: expr => expr.replace(/(\w+)\*0/g, '0') },
    { rule: "A + A = A", apply: expr => expr.replace(/(\w+)\+\1/g, '$1') },
    { rule: "A * A = A", apply: expr => expr.replace(/(\w+)\*\1/g, '$1') },
    { rule: "A + A' = 1", apply: expr => expr.replace(/(\w+)\+\1'/g, '1') },
    { rule: "A * A' = 0", apply: expr => expr.replace(/(\w+)\*\1'/g, '0') },
    { rule: "A'' = A", apply: expr => expr.replace(/(\w+)''/g, '$1') },
    { rule: "(A')' = A", apply: expr => expr.replace(/\((\w+)'\)'/g, '$1') },
    { rule: "A + AB = A", apply: expr => expr.replace(/(\w+)\+(\w+)\1/g, '$1') },
    { rule: "A + A'B = A + B", apply: expr => expr.replace(/(\w+)\+\1'(\w+)/g, '$1+$2') }
];

function simplify() {
    let input = document.getElementById('input').value;
    let output = input;
    
   
    rules.forEach(rule => {
        output = rule.apply(output);
    });

    document.getElementById('output').innerText = `Simplified Expression: ${output}`;
}
