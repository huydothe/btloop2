let money=parseInt(prompt('Nhập số tiền gửi'));
let moneymonth=parseInt(prompt('Nhập % lãi hàng tháng'));
let month=parseInt(prompt('Nhập số tháng gửi tiền'));
let amount;
for (let i=1; i<=month; i++){
    amount=money*(1+(moneymonth/100));
    document.write(amount);
}