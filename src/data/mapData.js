const Images = [
  { image: require('../storage/images/post_1.jpg') },
  { image: require('../storage/images/post_2.jpg') },
  { image: require('../storage/images/post_3.jpg') },
  { image: require('../storage/images/post_4.jpg') },
];

export const markers = [
  {
    coordinate: {
      latitude: 41.91612,
      longitude: 12.46595,
    },
    title: 'Trung tâm can thiện và hỗ trợ giáo dục hòa nhập An Hòa',
    address:
      'Số 14, ngõ 13, Khuất Duy Tiến, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
    image: Images[0].image,
    name: 'Lưu Thị Cúc',
    strength:
      'Phát triển kỹ năng chơi, Phát triển ngôn ngữ và kỹ năng xã hội, chỉnh ngọng, tiền tiểu học, hòa nhập.',
    number: '1023 456 789',
    email: 'luuthicuc@gmail.com',
    university: 'Sư phạm giáo dục đặc biệt',
    years: '12',
  },

  {
    coordinate: {
      latitude: 45.4373409,
      longitude: 12.2918135,
    },
    title: 'Venice',
    description: 'This is the best place',
    image: Images[1].image,
  },
  {
    coordinate: {
      latitude: 18.3962901,
      longitude: -79.7570175,
    },
    title: 'Beach Caribbean',
    description: 'This is the best place',
    image: Images[2].image,
  },
  {
    coordinate: {
      latitude: 31.2243084,
      longitude: 120.9162742,
    },
    title: 'Shang Hai',
    description: 'This is the best place',
    image: Images[3].image,
  },
];
