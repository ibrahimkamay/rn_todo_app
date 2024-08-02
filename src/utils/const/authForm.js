import Feather from '@expo/vector-icons/Feather';

export const loginForm = [
    { 
        id: '1', 
        title: 'E-mail adresiniz',
     },
    { 
        id: '2', 
        title: 'Şifreniz',
        isVisible: true,
        isVisibleIcon: <Feather name="eye" size={20} />,
     },
  ];

export const registerForm = [
    {
        title:"Tam adınızı giriniz",
        id: 1,
        isVisibleIcon: <Feather name="eye" size={20} />,
    },
    {
        title:"E-mail adresi giriniz",
        id: 2,
        isVisibleIcon: <Feather name="eye" size={20} />,
    },
    {
        title:"Şifrenizi giriniz",
        id: 3,
        isVisible: true,
        isVisibleIcon: <Feather name="eye" size={20} />,
    },
    {
        title:"Tekrar şifrenizi giriniz",
        id: 4,
        isVisible: true,
        isVisibleIcon: <Feather name="eye" size={20} />,
    }
    
]   