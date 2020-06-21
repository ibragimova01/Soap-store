// const initState = {
//   products: [
//     {
//       id: 1,
//       title: "Мыло 'Морской бриз'",
//       price: 199,
//       image: "soap14.jpg",
//       composition:
//         "Высококачественная английская мыльная основа из масел пальмы и кокоса, ароматическая композиция 'морской бриз', микка.",
//       description:
//         "Мыло обладает дезинфицирующим, ранозаживляющим, антибактериальным действием. Превосходно очищает и увлажняет кожу.",
//       weight: "100",
//     },
//     {
//       id: 2,
//       title: "Мыло с кристаллами",
//       price: 199,
//       image: "soap2.jpg",
//       composition:
//         "Мыльная основа из масел авакадо и кокоса, розовая глина, морская соль, эфирное масло розового дерева.",
//       description:
//         "Мыло хорошо снимает раздражение на коже и жирный блеск, разглаживает морщины и очищает поры.",
//       weight: "80",
//     },
//     {
//       id: 3,
//       title: "Виноградное мыло",
//       price: 150,
//       image: "soap3.jpg",
//       composition:
//         "Омыленные масла: пальмовое, кокосовое, оливковое, касторовое, подсолнечное, оливковое масло, масло виноградной косточки, измельченная корица, гвоздика, мед, пищевой краситель, эфирные масла лимона, апельсина, гвоздики, корицы, витамины А, Е.",
//       description:
//         "Улучшает восстановительные процессы после контакта с агрессивной средой, повышает жизненный тонус кожи.",
//       weight: "40",
//     },
//     {
//       id: 4,
//       title: "Йогуртовое мыло",
//       price: 299,
//       image: "soap4.jpg",
//       composition:
//         "Экстракт йогурта и фруктов, кокосовое масло, масло  рисовых отрубей.",
//       description:
//         "Это мыло ручной работы эффективно очистит вашу кожу, украшая её ароматом по-летнему сладких и сочных лесных ягод.",
//       weight: "90",
//     },
//     {
//       id: 5,
//       title: "Мыло-скраб",
//       price: 220,
//       image: "soap5.jpg",
//       composition:
//         "Кокосовое масло, масло абрикосовых косточек, скраб абрикосовой косточки, отдушка абрикос, сухоцветы, овсянные хлопья.",
//       description:
//         "Лучшее средство для глубокого очищения кожи в домашних условиях. Это натуральное мыло с частичками абрикосовых косточек.",
//       weight: "70",
//     },
//     {
//       id: 6,
//       title: "Мыло с сухоцветами",
//       price: 150,
//       image: "soap6.jpg",
//       composition:
//         "Масло зародышей пшеницы, кокосовое масло, цветы липы и чайной розы, измельченная корица, гвоздика.",
//       description:
//         "Способствует быстрому восстановлению повреждений, помогает коже оставаться гладкой и приятной наощупь.",
//       weight: "50",
//     },
//     {
//       id: 7,
//       title: "Оливковое мыло",
//       price: 270,
//       image: "soap7.jpg",
//       composition:
//         "Органическое оливковое масло (85-90%), пальмовое масло, растительный глицерин, родниковая вода.",
//       description:
//         "Натуральное оливковое мыло является антибактериальным, питает кожу витаминами и микроэлементами. Подходит для детской кожи.",
//       weight: "90",
//     },
//     {
//       id: 8,
//       title: "Лавандовое мыло",
//       price: 299,
//       image: "soap8.jpg",
//       composition:
//         "Эфирное масло лаванды, масло виноградных косточек, семена мака.",
//       description:
//         "Лаванда прекрасно освежает кожу, устраняет раздражение, отечность, зуд, шелушение и воспаление. Подходит для чувствительной кожи.",
//       weight: "100",
//     },
//     {
//       id: 9,
//       title: "Мыло 'Суданская роза'",
//       price: 180,
//       image: "soap9.jpg",
//       composition: "Эфирное масло иланг-иланга, суданская роза, мед. ",
//       description:
//         "Для любителей каркаде и тонкого аромата розы. Обладает легким лифтинговым эффектом. Подходит для зрелой кожи.",
//       weight: "60",
//     },
//     {
//       id: 10,
//       title: "Мыло с пчелиным воском",
//       price: 299,
//       image: "soap10.jpg",
//       composition:
//         "Оливковое масло, масло ши, прополис, пчелиный воск, натуральный аромат меда с молоком.",
//       description:
//         "Пчелиный воск обладает смягчающим и противовоспалительным действием, создает защитную физиологическую пленку, придает коже гладкость и шелковистость.",
//       weight: "70",
//     },
//     {
//       id: 11,
//       title: "Мыло 'Малиновые грезы'",
//       price: 299,
//       image: "soap11.jpg",
//       composition: "Кокосовое масло, масло ши, экстракт малины, витамины С, Е.",
//       description:
//         "Мыло способствует отбеливанию, а так же глубоко питает и увлажняет кожу.",
//       weight: "80",
//     },
//     {
//       id: 12,
//       title: "Мыло из козьего молока",
//       price: 299,
//       image: "soap12.png",
//       composition:
//         "Мыло способствует осветлению пигментных изменений и веснушек, высокое содержание казеина содействует увлажнению и питанию клеток эпидермиса.",
//       description:
//         "Омыленные масла: кокосовое, оливковое, касторовое, подсолнечное, козье молоко, мед, эфирные масла аниса и жасмина, витамин А, Е.",
//       weight: "100",
//     },
//     {
//       id: 13,
//       title: "Мыло 'Карельская голубика'",
//       price: 280,
//       image: "soap13.jpg",
//       composition:
//         "Тертые ягоды, натуральные растительные отвары, экстракт голубики, кокосовое масло.",
//       description:
//         "Мыло с ароматом свежих ягод голубики очищает, обладает ухаживающими свойствами.",
//       weight: "94",
//     },
//     {
//       id: 14,
//       title: "Карамельное мыло",
//       price: 280,
//       image: "soap1.jpg",
//       composition:
//         "Масло пшеницы, масло персиковых косточек, парфюмерная композиция, натуральный краситель.",
//       description:
//         "Мыло нежно очистит вашу кожу и наполнит ванную комнату сладким, соблазнительным ароматом карамели.",
//       weight: "110",
//     },
//     {
//       id: 15,
//       title: "Соляное мыло",
//       price: 270,
//       image: "soap17.jpg",
//       composition:
//         "Натриевые соли жирных кислот масла кокоса, соль древнего Пермского моря, вода, спирулина, эфирное масло литсеи кубеба, минеральный пигмент.",
//       description:
//         "Соляное мыло обладает выраженным биологически активным действием, дезинфицирует, активно очищает поры, придает упругость и бархатистость коже.",
//       weight: "110",
//     },
//     {
//       id: 16,
//       title: "Мыло 'Конфетти'",
//       price: 250,
//       image: "soap21.jpg",
//       composition:
//         "Эфирное анисовое масло, сухие сливки, мед, натуральные наполнители, витамины А и Е",
//       description:
//         "Нежно очищает кожу, улучшает питание клеток, восстанавливает кровообращение, способствует регенерации кожи.",
//       weight: "96",
//     },
//     {
//       id: 17,
//       title: "Мыло с лепестками шиповника",
//       price: 299,
//       image: "soap15.jpg",
//       composition:
//         "Масло шиповника, отвар шиповника, сахар, мёд, молотые плоды шиповника, эфирные масла бергамота и герани.",
//       description:
//         "Экстракт и масло шиповника повышают эластичность кожи, нормализуя работу ее сальных и потовых желез.",
//       weight: "90",
//     },
//     {
//       id: 18,
//       title: "Мыло 'Ягодный микс'",
//       price: 320,
//       image: "18.jpg",
//       composition:
//         "Натриевые соли оливкового, миндаля сладкого масел, макадамии масло, экстракты: черника, малина ягода, рябина красная ягода, клюква.",
//       description:
//         "Питает, способствует регенерации кожи, прекрасный антисептик, повышает упругость и эластичность кожи.",
//       weight: "130",
//     },
//     {
//       id: 19,
//       title: "Крем-мыло с ванилью",
//       price: 250,
//       image: "19.jpg",
//       composition:
//         "Эфирные масла ванили и пачули, масло арганы, мёд акации, тростниковый сахар.",
//       description:
//         "Ванильное крем-мыло обладает отличными противовоспалительными и антисептическими свойствами, поэтому хорошо подходит для заживления трещин и рубцов на коже.",
//       weight: "100",
//     },
//     {
//       id: 20,
//       title: "Мыло 'Кусочек моря'",
//       price: 280,
//       image: "20.jpg",
//       composition:
//         "Эфирное масло чайного дерева, кокосовое масло, морская соль, витамины А и Е, натуральные красители.",
//       description:
//         "Мыло носит в себе всю пользу морской воды. Благодаря содержанию морской соли, кристаллами которой обеспечивается бережное скрабирование.",
//       weight: "110",
//     },
//   ],
// };

import axios from "axios";

const initState= {}

const productReducer = (state = initState) => {

  axios.get("https://lavanda-5003b.firebaseio.com/products.json")
  .then(data =>{
    
    state.products=[];
    for(let key in data.data) {
      state.products.push(data.data[key])
    }
  })
  .catch(data =>{
    console.log(data)
    alert("error products")
  })
  return state;
};
export default productReducer;
