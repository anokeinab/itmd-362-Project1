<script>
function validateForm() {
    var x = document.forms["form"]["email"].value;
    if (x == "") {
        alert("Please type your email");
        return false;
    }
}
