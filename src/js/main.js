const upProduces = [
  {
      id: 'Produce 1',
      img: "./src/img//image 26 (3).png",
      name: 'Fresh and Healthy Mixed Mayonnaise Salad',
      money: '30$',
      buttion: 'Add to crat'
  },
  {
      id: 'Produce 2',
      img: "./src/img//image 26 (3).png",
      name: 'Fresh and Healthy Mixed Mayonnaise Salad',
      money: '30$',
      buttion: 'Add to crat'
  },
  {
      id: 'Produce 3',
      img: "./src/img//image 26 (3).png",
      name: 'Fresh and Healthy Mixed Mayonnaise Salad',
      money: '30$',
      buttion: 'Add to crat'
  },

]
function upProduces(produce) {
  if (!Array.isArray(produce) || produce == 0) return false
  let result = ''
  for (let i = 0; i < produce.length; i++) {
      const produces = produce[i];
      result += ` < div >
      < div class="product-img" >
          <a href="bai1.html">
              <img src="${produce.img}" alt="" />
          </a>
  </div >
      <div class="product-content">
          <h3><a href="">${produce.name}</a></h3>
          <div class="flex">
              <span>${produce.time} times</span>
              <span>${produce.type}</span>
          </div>
      </div>
</div >
`


  }


}