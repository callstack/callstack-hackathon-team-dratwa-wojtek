import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';


// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
class TabScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          id="home"
          title="Home"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image source={require('./assets/images/home.png')} />}>
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
            />
        </TabItem>

        <TabItem
          id="posts"
          title="Posts"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image source={require('./assets/images/posts.png')} />}>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('posts')}
            />
        </TabItem>

        <TabItem
          id="profile"
          title="Profile"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image source={require('./assets/images/profile.png')} />}>
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute('profile')}
            />
        </TabItem>
      </TabNavigation>
    );
  }
}