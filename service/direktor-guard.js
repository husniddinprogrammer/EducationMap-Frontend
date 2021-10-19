var aniqLavozim = "1";

function yuklashlavozim() {
    checkDirektor();
}

function checkDirektor() {
    const roles = auth_service.getRoles();
    if (roles && typeof roles == 'object') {
        if (roles.includes("CREATOR")) {
            aniqLavozim = "CREATOR";
            location.href = "../creator/dashboard/dashboard.html";
            return true;
        } else {
            if (roles.includes("BOSS")) {
                aniqLavozim = "BOSS";
                location.href = "../admin/dashboard/dashboard.html";
                return true;
            } else {
                if (roles.includes("ADMIN")) {
                    aniqLavozim = "ADMIN";
                    location.href = "../admin/dashboard/dashboard.html";
                    return true;
                } else {
                    if (roles.includes("PEOPLE")) {
                        aniqLavozim = "PEOPLE";
                        return true;
                    } else {
                        return false;
                    }
                }

            }

        }

    }
    return false;
}