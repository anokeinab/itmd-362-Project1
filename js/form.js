<script>
function validateForm() {
    var x = document.forms["form"]["email"].value;
    if (x == "") {
        alert("Email address missing,check and submit again");
        return false;
    }
}
