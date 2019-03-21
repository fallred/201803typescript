// 定义一个枚举类型的值
enum Gender {
    GIRL,
    BOY
}
console.log(`李磊是${Gender.BOY},梅梅是${Gender.GIRL}`);

enum OrderStatus {
    WaitForPay='等待付款',
    WaitForSend =  '等待发货',
    Sended =  '已发货',
    Signed =  '已签收',
};