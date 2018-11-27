/**
 * Created by Tw93 on 2016/11/4.
 */

export default {

  tabTitles: [
    {
      title: '首页',
      icon: require('../images/nav1.png'),
      activeIcon: require('../images/nav2.png')
    },
    {
      title: '特别推荐',
      icon: require('../images/nav1.png'),
      activeIcon: require('../images/nav2.png')
    },
    {
      title: '消息中心',
      icon: require('../images/nav1.png'),
      activeIcon: require('../images/nav2.png'),
      badge: 5
    },
    {
      title: '我的主页',
      icon: require('../images/nav1.png'),
      activeIcon: require('../images/nav2.png'),
      dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 60,
    iconHeight: 60,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}
