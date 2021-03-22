import Axios from 'axios';

const IpServiceApi = {
   async fetchCurrentPhysicPublicIP() {
     let ipInRaw = await Axios.get("https://forge.speedtest.cn/api/location/info");
     console.log(ipInRaw)
     // @ts-ignore
     return ipInRaw["data"]["ip"];
   },
};

export default IpServiceApi;
