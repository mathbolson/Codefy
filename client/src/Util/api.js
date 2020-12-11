import axios from "axios";

export default {
    getCurrentUser: function () {
        return axios.get("/api/user")
    },
    logOut: function () {
        return axios.get("/api/logout")
    }
}