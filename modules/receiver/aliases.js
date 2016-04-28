/*  Copyright (C) 2016 Milan Pässler
    Copyright (C) 2016 HopGlass Server contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>. */

'use strict'

var fs = require('fs')
var _ = require('lodash')

var config = {
  "aliases": {
    "file": "./aliases.json"
  }
}

module.exports = function(configData) {
  _.merge(config, configData)

  var aliases = {}

  try {
    aliases = JSON.parse(fs.readFileSync(config.aliases.file, 'utf8'))
  } catch (err) {
    console.warn("alias file '" + config.aliases.file + "' doesn't exist, using empty")
  }

  function getRaw() {
    return aliases
  }

  var exports = {}
  exports.getRaw = getRaw
  exports.overwrite = true

  return exports
}
