//For line

var web3Line = new Web3(
    new Web3.providers.WebsocketProvider(nodeUrl)
);
const gameContractLine = new web3Line.eth.Contract(abi, contract_address);

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://stats.SolidETH.org/info');
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { 
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); 
  } else { 
    var obj = JSON.parse(xhr.response);  
    
    var txCountOld = obj.data.txCount;
    var txAmountOld = obj.data.txAmount;
    var levelList0Old = obj.data.levelsNumber[0];
    var levelList1Old = obj.data.levelsNumber[1];
    var levelList2Old = obj.data.levelsNumber[2];
    var levelList3Old = obj.data.levelsNumber[3];
    var levelList4Old = obj.data.levelsNumber[4];
    var levelList5Old = obj.data.levelsNumber[5];
    var levelList6Old = obj.data.levelsNumber[6];
    var levelList7Old = obj.data.levelsNumber[7];
    var inLast24h = obj.data.inLast24h;
    var inLast24hAmount = obj.data.inLast24hAmount;
    var btcPrice = obj.data.ethToBtc;
    var usdtPrice = obj.data.ethToUsdt;
    
                document.getElementById('vs_line_total_tx').innerHTML = txCountOld;

                document.getElementById('vs_line_l2_tx').innerHTML = levelList1Old;
                document.getElementById('vs_line_l3_tx').innerHTML = levelList2Old;
                document.getElementById('vs_line_l4_tx').innerHTML = levelList3Old;
                document.getElementById('vs_line_l5_tx').innerHTML = levelList4Old;
                document.getElementById('vs_line_l6_tx').innerHTML = levelList5Old;
                document.getElementById('vs_line_l7_tx').innerHTML = levelList6Old;
                document.getElementById('vs_line_l8_tx').innerHTML = levelList7Old;
                document.getElementById('vs_ETH_amuont').innerHTML = ((txAmountOld)).toFixed(2);
                
                document.getElementById('vs_BTC_amuont').innerHTML = ((txAmountOld)*btcPrice).toFixed(4);
                document.getElementById('vs_USDT_amuont').innerHTML = ((txAmountOld)*usdtPrice).toFixed(2);
                
                
                var date1 = new Date(2019,3,12);
                var date2 = new Date();
                var daysLag = Math.ceil(Math.abs( (date2.getTime() - date1.getTime()) * 100) / (1000 * 3600 * 24 * 365))/100;
                //console.log(daysLag);
                document.getElementById('vs_project_days').innerHTML = daysLag;    
                
                gameContractLine.methods.currUserID().call({}, (error, result) =>{
                    if(!error){
                            document.getElementById('vs_line_total_user').innerHTML = result;
                            document.getElementById('vs_line_l1_tx').innerHTML  = result;
                            
                            if($('.currencies_vs').length)
                            $('.currencies_vs').simplemarquee({
                                handleHover: false,
                                speed: 35,
                            });                 
            
                    }else{
                        console.error(error);
                    }
                });
    
  }
};
