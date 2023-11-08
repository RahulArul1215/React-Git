import './Assests/css/style.css';

const Form1 = () => {
    const func = () =>{
        AudioListener('Submited Successfully');
    }
    return (
        <div>
            <div className="header">
                <br />
                <h1>Sri Krishna College of Engineering & Technology</h1>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
            </div>
            <div className="box">
                <form onsubmit={func}>
                    <h2 className="col">Login Form</h2>
                    <input className="textareasize" type="text" placeholder="Name"></input><br /><br />
                    <input className="textareasize" type="text" placeholder="Register No"></input><br /><br />
                    <input className="textareasize" type="text" placeholder="Email"></input><br /><br />
                    <input className="textareasize" type="password" placeholder="Password"></input><br /><br />
                    <input type="Submit" className="submitbut"  value="Submit" ></input><br /><br />
                </form>
            </div>
        </div>
    )
}
export default Form1;
