/**
 * Created by Alexandru Huszar on 14/08/2018.
 */

/**
 * @typedef {{
 *  stopPropagation: Function,
 *  preventDefault: Function,
 *  defaultPrevented: Boolean,
 *  currentTarget: {
 *   id: String
 *  }
 * }} ClickEvent
 */

/**
 * @typedef {{
 *    login: String,
 *    id: String,
 *    node_id: String,
 *    avatar_url: String,
 *    gravatar_id: String,
 *    url: String,
 *    html_url: String,
 *    followers_url: String,
 *    following_url:String,
 *    gists_url: String,
 *    starred_url: String,
 *    subscriptions_url: String,
 *    organizations_url: String,
 *    repos_url: String,
 *    events_url: String,
 *    received_events_url: String,
 *    type: String,
 *    site_admin: Boolean
 *  }} User
 */

/**
 * typedef {{
 *   id: String,
 *   node_id: String,
 *   url: String,
 *   name: String,
 *   color: String,
 *   default: Boolean
 *  }} Label
 */

/**
 * @typedef {{
 *  id: String,
 *  number: Number,
 *  title: String,
 *  user: User,
 *  labels: [Label],
 *  state: String,
 *  locked: Boolean,
 *  created_at: Date,
 *  updated_at: Date,
 *  closed_at: null,
 * }} Issue
 */

