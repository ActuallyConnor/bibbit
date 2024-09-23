export default class DatabaseContainer {
// Number of attempts to (re-)connect
  RECONNECT_LIMIT = 2

  // The max lifetime of a MySQL connection
  WAIT_TIMEOUT = 900

  // Max execution time
  MAX_EXECUTION_TIME = 5000

  // Max execution time for read-only connections
  MAX_EXECUTION_TIME_READONLY = 30000
}