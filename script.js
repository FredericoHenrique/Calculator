var arrayValues = []
var result = ''

function calcular(type, value) {
    if (type == 'action') {
        if (value == 'c') {
            document.getElementById('show-result').value = ''
        }

        if (value == '.') {
            // Validar se já há . na string e não incluir um novo .
            var aux = document.getElementById('show-result').value += value
        }

        if (value == '/' || value == '*' || value == '-' || value == '+') {
            arrayValues.push(document.getElementById('show-result').value)
            arrayValues.push(value)
            document.getElementById('show-result').value = ''
        }

        if (value == '=') {
            if (arrayValues.length != 0) {
                arrayValues.push(document.getElementById('show-result').value)
                for (let index = 0; index < arrayValues.length; index++) {
                    result += arrayValues[index];
                }
                arrayValues = []
                document.getElementById('show-result').value = eval(result)
                result = ''
            }

        }

    } else if (type == 'number') {
        document.getElementById('show-result').value += value
    }
}