var updateBtns = document.getElementsByClassName('update-cart')

console.log('USER:', 'user 99')
for(var i=0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
    var productId = this.dataset.product
    console.log('USER:', 'user 99', productId)
    })
}