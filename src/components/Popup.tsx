export const Popup = () => <div className="popup_wrapper">
  <h3>Чтобы читать эту статью, вам нужно купить доступ.</h3>
  <p>Оплатив покупку, вы получите постоянный доступ ко всем статьям сайта, отмеченным "&#128274;"</p>
  <h4>Купить сейчас!</h4>
  <form method="POST" action="https://yoomoney.ru/quickpay/confirm">
    <input type="hidden" name="receiver" value="41001xxxxxxxxxxxx"/>
    <input type="hidden" name="label" value="застатьи"/>
    <input type="hidden" name="quickpay-form" value="button"/>
    <input type="hidden" name="sum" value="2000" data-type="number"/>
    <label><input type="radio" name="paymentType" value="PC"/>ЮMoney</label>
    <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label>
    <input type="submit" value="Перевести"/>
</form>
</div>
