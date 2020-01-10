import React from 'react';
import { createAppContainer } from 'react-navigation';
import { withTranslation } from 'react-i18next';

import DrawerNavigator from './DrawerNavigator';

const AppContainer = createAppContainer(DrawerNavigator);

class AppNavigator extends React.Component {

  render() {
    const { t, i18n } = this.props;

    return (
      <AppContainer
        screenProps={{
          t,
          i18n
        }}
      />
    );
  }
}

export default withTranslation()(AppNavigator);
