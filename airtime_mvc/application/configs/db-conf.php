<?php

/* This file is only needed during upgrades when we need the database parameters from /etc/libretime/libretime.conf.
 * The reason we don't just use conf.php is because conf.php may try to load configuration parameters that aren't
 * yet available because libretime.conf hasn't been updated yet. This situation ends up throwing a lot of errors to stdout.
 * airtime*/

require_once("conf.php");

$CC_CONFIG = Config::getConfig();
