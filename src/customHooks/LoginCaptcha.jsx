import UseCaptcha from '../customHooks/captcha.js'
const LoginCaptcha = () =>
    {
        const code = UseCaptcha();
        return(
            <div>
                <h3>login User</h3>
                <form >
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" name="UserId"  /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" name="Password"  /></dd>
                    </dl>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
    export default LoginCaptcha