function renderComponentToString(component, callback, id) {
  // Requires react-tools 0.3.2. This is an ugly require() but this is not
  // "officially" supported yet.

  // We use a callback API to keep the API async in case in the future we ever
  // need it, but in reality this is a synchronous operation.
  id = id || 'reactRoot';

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
