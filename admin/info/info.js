function info() {
    const roles = auth_service.getRoles();
    if (roles && typeof roles == 'object') {
        if (roles.includes("ADMIN")) {
            aniqLavozim = "ADMIN";
            return true;
        } else {
            location.href = "../../login/index.html";
        }
    }
}