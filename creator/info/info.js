function info() {
    const roles = auth_service.getRoles();
    if (roles && typeof roles == 'object') {
        if (roles.includes("CREATOR")) {
            aniqLavozim = "CREATOR";
            return true;
        } else {
            location.href = "../../login/index.html";
        }
    }
}