import { ADD_ORDER,  DELETE_ORDER } from './constans'

const date = () =>
  `${new Date().getFullYear()}.0${
    new Date().getMonth() + 1
  }.${new Date().getDate()} - ${new Date().getHours()}:${new Date().getMinutes()}`

export const initialState = {
  orders: [
    {
      id: 1,
      date: date(),
      corporation: 'Epam',
      surname: 'Петров',
      name: 'Иван',
      patronymic: 'Александрович',
      phoneNumber: '89521456742',
      comments: [''],
      ATICode: '12345',
    },
    {
      id: 2,
      date: date(),
      corporation: 'Ubisoft',
      surname: 'Белов',
      name: 'Сергей',
      patronymic: 'Петрович',
      phoneNumber: '87531214745',
      comments: [],
      ATICode: '54321',
    },
    {
      id: 3,
      date: date(),
      corporation: 'Bioware',
      surname: 'Смирнов',
      name: 'Евгений',
      patronymic: 'Валентинович',
      phoneNumber: '89523326489',
      comments: [],
      ATICode: '34215',
    },
    {
      id: 4,
      date: date(),
      corporation: 'Valve',
      surname: 'Клёсов',
      name: 'Никита',
      patronymic: 'Сергеевич',
      phoneNumber: '89525417621',
      comments: [],
      ATICode: '98143',
    },
    {
      id: 5,
      date: date(),
      corporation: 'Bethesda',
      surname: 'Алексеев',
      name: 'Роберт',
      patronymic: 'Богданович',
      phoneNumber: '89527683412',
      comments: [],
      ATICode: '76821',
    },
  ],
}

const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      }
    // case SEARCH_ORDER:
    //   return {
    //     ...state,
    //     orders: [
    //       ...state.orders.filter(order =>
    //         order.name.toLowerCase().includes(action.payload.toLowerCase()),
    //       ),
    //     ],
    //   }
    case DELETE_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders
            .filter(order => order.id !== action.payload)
            .map(order => ({
              ...order,
              id: order.id >= action.payload ? order.id - 1 : order.id,
            })),
        ],
      }

    default:
      return state
  }
}

export default OrdersReducer
