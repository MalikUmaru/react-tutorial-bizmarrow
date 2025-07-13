// Embeded expression is a tecnique we use to write 
// JavaScript code directly inside of HTML code

let fullname = prompt ("Enter Your Full Name");
let address = prompt ("Enter Your Address");
let isMarried = prompt ("Are You Married(YES/NO)");
let gender = prompt("Male or Female");
const EE = () => {


return (
    <div>
        <h2 className="user-fullname">{fullname}</h2>
        <p className="user-address">{address}</p>
        <p className="user-married">Married?;{isMarried}</p>
        <p className="user-gender">{gender}</p>
    </div>
)
}

export default EE;