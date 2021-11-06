


function Login() {
    return (
        <div class="container">
        <form id="signup" class="form">
            <h1>Log in</h1>
            <div class="form-field">
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" autocomplete="off"/>
                <small></small>
            </div>

            <div class="form-field">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" autocomplete="off"/>
                <small></small>
            </div>

            <div class="form-field">
                <input type="submit" value="Log in"/>
            </div>
        </form>
    </div>
    );
  }
  
  export default Login;
  
  