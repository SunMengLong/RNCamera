/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ScanQRCode from './ScanQRCode'
import {name as appName} from './app.json';
import { RNCamera } from 'react-native-camera';

AppRegistry.registerComponent(appName, () => ScanQRCode);
