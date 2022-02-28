/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IP address to listen on
 */
export type ServerAddress = string;
/**
 * Whether the Appium server should allow web browser connections from any host
 */
export type AllowCORS = boolean;
/**
 * Set which insecure features are allowed to run in this server's sessions. Features are defined on a driver level; see documentation for more details. Note that features defined via "deny-insecure" will be disabled, even if also listed here. If string, a path to a text file containing policy or a comma-delimited list.
 */
export type AllowInsecureFeatures = string[];
/**
 * Base path to use as the prefix for all webdriver routes running on the server
 */
export type BasePathForWebdriverRoutes = string;
/**
 * Callback IP address (default: same as "address")
 */
export type CallbackServerAddress = string;
/**
 * Callback port (default: same as "port")
 */
export type CallbackServerPort = number;
/**
 * Add exaggerated spacing in logs to help with visual inspection
 */
export type EnableDebugLogSpacing = boolean;
/**
 * Set which insecure features are not allowed to run in this server's sessions. Features are defined on a driver level; see documentation for more details. Features listed here will not be enabled even if also listed in "allow-insecure", and even if "relaxed-security" is enabled. If string, a path to a text file containing policy or a comma-delimited list.
 */
export type DenyInsecureFeatures = string[];
/**
 * Number of seconds the Appium server should apply as both the keep-alive timeout and the connection timeout for all requests. A value of 0 disables the timeout.
 */
export type KeepAliveTimeout = number;
/**
 * Use local timezone for timestamps
 */
export type LocalTimezone = boolean;
/**
 * Also send log output to this file
 */
export type LogfilePath = string;
/**
 * One or more log filtering rules
 */
export type LogFilteringRules = string[];
/**
 * Log level (console[:file])
 */
export type LogLevel =
  | "info"
  | "info:debug"
  | "info:info"
  | "info:warn"
  | "info:error"
  | "warn"
  | "warn:debug"
  | "warn:info"
  | "warn:warn"
  | "warn:error"
  | "error"
  | "error:debug"
  | "error:info"
  | "error:warn"
  | "error:error"
  | "debug"
  | "debug:debug"
  | "debug:info"
  | "debug:warn"
  | "debug:error";
/**
 * Do not use color in console output
 */
export type SuppressLogColor = boolean;
/**
 * Show timestamps in console output
 */
export type LogTimestamps = boolean;
/**
 * Add long stack traces to log entries. Recommended for debugging only.
 */
export type ShowLongStacktraces = boolean;
/**
 * Do not check that needed files are readable and/or writable
 */
export type DisablePermissionChecks = boolean;
/**
 * Port to listen on
 */
export type ServerPort = number;
/**
 * Disable additional security checks, so it is possible to use some advanced features, provided by drivers supporting this option. Only enable it if all the clients are in the trusted network and it's not the case if a client could potentially break out of the session sandbox. Specific features can be overridden by using "deny-insecure"
 */
export type EnableRelaxedSecurity = boolean;
/**
 * Enables session override (clobbering)
 */
export type AllowSessionOverride = boolean;
/**
 * Cause sessions to fail if desired caps are sent in that Appium does not recognize as valid for the selected device
 */
export type StrictCapsMode = boolean;
/**
 * Absolute path to directory Appium can use to manage temp files. Defaults to C:\Windows\Temp on Windows and /tmp otherwise.
 */
export type OverrideTempPath = string;
/**
 * Absolute path to directory Appium can use to save iOS instrument traces; defaults to <tmp>/appium-instruments
 */
export type TraceDirectory = string;
/**
 * A list of drivers to activate. By default, all installed drivers will be activated.
 */
export type EnabledDrivers = string[];
/**
 * A list of plugins to activate. To activate all plugins, the value should be an array with a single item "all".
 */
export type EnabledPlugins = string[];
/**
 * Also send log output to this http listener
 */
export type WebhookURL = string;

/**
 * A schema for Appium configuration files
 */
export interface AppiumConfiguration {
  server?: ServerConfiguration;
}
/**
 * Configuration when running Appium as a server
 */
export interface ServerConfiguration {
  address?: ServerAddress;
  "allow-cors"?: AllowCORS;
  "allow-insecure"?: AllowInsecureFeatures;
  "base-path"?: BasePathForWebdriverRoutes;
  "callback-address"?: CallbackServerAddress;
  "callback-port"?: CallbackServerPort;
  "debug-log-spacing"?: EnableDebugLogSpacing;
  "default-capabilities"?: DefaultCapabilities;
  "deny-insecure"?: DenyInsecureFeatures;
  driver?: DriverSpecificConfig;
  "keep-alive-timeout"?: KeepAliveTimeout;
  "local-timezone"?: LocalTimezone;
  log?: LogfilePath;
  "log-filters"?: LogFilteringRules;
  "log-level"?: LogLevel;
  "log-no-colors"?: SuppressLogColor;
  "log-timestamp"?: LogTimestamps;
  "long-stacktrace"?: ShowLongStacktraces;
  "no-perms-check"?: DisablePermissionChecks;
  nodeconfig?: NodeConfigFilePath;
  plugin?: PluginSpecificConfig;
  port?: ServerPort;
  "relaxed-security"?: EnableRelaxedSecurity;
  "session-override"?: AllowSessionOverride;
  "strict-caps"?: StrictCapsMode;
  tmp?: OverrideTempPath;
  "trace-dir"?: TraceDirectory;
  "use-drivers"?: EnabledDrivers;
  "use-plugins"?: EnabledPlugins;
  webhook?: WebhookURL;
}
/**
 * Set the default desired capabilities, which will be set on each session unless overridden by received capabilities. If a string, a path to a JSON file containing the capabilities, or raw JSON.
 */
export interface DefaultCapabilities {
  [k: string]: unknown;
}
/**
 * Driver-specific configuration. Keys should correspond to driver package names
 */
export interface DriverSpecificConfig {
  [k: string]: unknown;
}
/**
 * Path to configuration JSON file to register Appium as a node with Selenium Grid 3; otherwise the configuration itself
 */
export interface NodeConfigFilePath {
  [k: string]: unknown;
}
/**
 * Plugin-specific configuration. Keys should correspond to plugin package names
 */
export interface PluginSpecificConfig {
  [k: string]: unknown;
}
