/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function renderComponentToString(component, callback, id) {
  // Requires react-tools 0.3.2. This is an ugly require() but this is not
  // "officially" supported yet.

  // We use a callback API to keep the API async in case in the future we ever
  // need it, but in reality this is a synchronous operation.
  id = id || 'rR';

  var ReactReconcileTransaction = require('react-tools/build/modules/ReactReconcileTransaction');
  var transaction = ReactReconcileTransaction.getPooled();
  transaction.reinitializeTransaction();
  try {
    transaction.perform(function() {
      callback(component.mountComponent(id, transaction))
    }, null);
  } finally {
    ReactReconcileTransaction.release(transaction);
  }
}

module.exports = {
  renderComponentToString: renderComponentToString
};
