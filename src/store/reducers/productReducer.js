const initState = {
  products: [
    {
      id:1, 
      title:"Мыло 'Морской бриз'",
      price: 199,
      image: "soap14.jpg",
      composition: "",
      description: "Мыло обладает дезинфицирующим, ранозаживляющим, антибактериальным действием. Благодаря входящему в его состав разнообразию эфирных масел мыло эффективно обновляет утомленную кожу, устраняет воспалительные процессы, нормализует работу сальных желез. Превосходно очищает и увлажняет кожу."
    },
    {
      id:2, 
      title:"Мыло с кристаллами",
      price: 199,
      image: "soap2.jpg"
    },
    {
      id:3, 
      title:"Декоративное мыло",
      price: 150,
      image: "soap3.jpg"
    },
    {
      id:4, 
      title:"Йогуртовое мыло",
      price: 299,
      image: "soap4.jpg"
    },
    {
      id:5, 
      title:"Мыло-скраб",
      price: 220,
      image: "soap5.jpg"
    },
    {
      id:6, 
      title:"Мыло с сухоцветами",
      price: 250,
      image: "soap6.jpg"
    },
    {
      id:7, 
      title:"Оливковое мыло",
      price: 270,
      image: "soap7.jpg"
    },
    {
      id:8, 
      title:"Лавандовое мыло",
      price: 299,
      image: "soap8.jpg"
    },
    {
      id:9, 
      title:"Розовое мыло",
      price: 180,
      image: "soap9.jpg"
    },
    {
      id:10, 
      title:"Мыло с пчелиным воском",
      price: 299,
      image: "soap10.jpg"
    },
    {
      id:11, 
      title: "Мыло 'Малиновые грезы'",
      price: 299,
      image: "soap11.jpg"
    },
    {
      id:12, 
      title:"Мыло из козьего молока",
      price: 299,
      image: "soap12.png"
    },
    {
      id:13, 
      title:"Брусничное мыло",
      price: 280,
      image: "soap13.jpg"
    },
    {
      id:14, 
      title:"Мыльное ассорти",
      price: 200,
      image: "soap1.jpg"
    },
    {
      id:15, 
      title:"Мыло-скраб с морской солью",
      price: 270,
      image: "soap17.jpg"
    },
    {
      id:16, 
      title:"Мыло 'Конфети'",
      price: 250,
      image: "soap21.jpg"
    },
    {
      id:17, 
      title:"Мыло с лепестками шиповника",
      price: 299,
      image: "soap15.jpg"
    },
    {
      id:18, 
      title:"Мыло 'Ягодный микс'",
      price: 320,
      image: "18.jpg"
    },
    {
      id:19, 
      title:"Крем-мыло с ванилью",
      price: 250,
      image: "19.jpg"
    },
    {
      id:20, 
      title:"Мыло 'Кусочек моря'",
      price: 280,
      image: "20.jpg"
    }
  ]
}

const productReducer = (state = initState, action) => {
  return state 
}
export default productReducer 