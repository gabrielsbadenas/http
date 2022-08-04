function front(){const user=require('../modelo/user.js')
const userInst=user('gabriel')
return ("<body>"+userInst+"</body>")
}
