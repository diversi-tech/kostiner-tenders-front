const Google=()=>{

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

    return
    (
        
        <>
        <div class="g-signin2" data-onsuccess="onSignIn">ghjkl;'</div>
        <div id="g_id_onload"
            data-client_id="720220089306-t58chastvvm3593rprr080mgjbjcntub.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="redirect"
            data-login_uri="http://localhost:5173"
            data-auto_prompt="false">
        </div>

        <div class="g_id_signin"
            data-type="standard"
            data-shape="pill"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-locale="iw"
            data-logo_alignment="left">
        </div>
        </>

    )

}
export default Google;



