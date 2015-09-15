/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './polyfills';

import {historyFor} from './history';
import {viewerFor} from './viewer';

import {installAd} from '../builtins/amp-ad';
import {installImg} from '../builtins/amp-img';
import {installVideo} from '../builtins/amp-video';
import {installPixel} from '../builtins/amp-pixel';
import {installStyles} from './styles';
import {stubElements} from './custom-element';
import {adopt} from './runtime';
import {installExperimentalViewerIntegration} from './experimental-viewer-integration';
import {cssText} from '../build/css.js';
import {action} from './action';
import {maybeValidate} from './validator-integration';

historyFor(window);
viewerFor(window);

installAd(window);
installImg(window);
installPixel(window);
installVideo(window);

installStyles(document, cssText);
adopt(window);
stubElements(window);

action.addEvent('tap');

maybeValidate(window);

installExperimentalViewerIntegration();
