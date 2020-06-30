import Axios from "axios";

Axios.defaults.baseURL='http://www.xidegui.top:9575';

Axios.defaults.headers.post['Content-Type']='application/json';

export default Axios
