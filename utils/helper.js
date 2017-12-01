const fs = require('fs');

class Helper {
  randomInt(min, max) {
    return Math.floor(Math.random() * (((max - min) + 1) + min));
  }

  countDirectoryFiles(directory) {
    return new Promise((resolve, reject) => {
      return fs.readdir(directory, (err, files) => {
        if (err) {
          return reject(err);
        }
        return resolve(files.length);
      });
    });
  }

  calculateItemRating(item) {
    return item.stats.str + item.stats.dex + item.stats.end + item.stats.int;
  }

  sumPlayerTotalStrength(player) {
    return player.stats.str
      + player.equipment.helmet.str
      + player.equipment.armor.str
      + player.equipment.weapon.str
      + player.equipment.relic.str;
  }

  sumPlayerTotalDexterity(player) {
    return player.stats.dex
      + player.equipment.helmet.dex
      + player.equipment.armor.dex
      + player.equipment.weapon.dex
      + player.equipment.relic.dex;
  }

  sumPlayerTotalEndurance(player) {
    return player.stats.end
      + player.equipment.helmet.end
      + player.equipment.armor.end
      + player.equipment.weapon.end
      + player.equipment.relic.end;
  }

  sumPlayerTotalIntelligence(player) {
    return player.stats.int
      + player.equipment.helmet.int
      + player.equipment.armor.int
      + player.equipment.weapon.int
      + player.equipment.relic.int;
  }

  sumPlayerTotalLuck(player) {
    return player.stats.luk
      + player.equipment.relic.luk;
  }

  generateStatsString(player) {
    return `\`\`\`Here are your stats!
    Health: ${player.health}
    Level: ${player.level}
    Experience: ${player.experience} / ${player.level * 15}
    Gold: ${player.gold}
    Map: ${player.map}

    Stats:
      Strength: ${player.stats.str} (${this.sumPlayerTotalStrength(player)})
      Dexterity: ${player.stats.dex} (${this.sumPlayerTotalDexterity(player)})
      Endurance: ${player.stats.end} (${this.sumPlayerTotalEndurance(player)})
      Intelligence: ${player.stats.int} (${this.sumPlayerTotalIntelligence(player)})
      Luck: ${player.stats.luk} (${this.sumPlayerTotalLuck(player)})

    Equipment:
      Helment: ${player.equipment.helmet.name}
        Stats:
          Strength: ${player.equipment.helmet.str}
          Dexterity: ${player.equipment.helmet.dex}
          Endurance: ${player.equipment.helmet.end}
          Intelligence: ${player.equipment.helmet.int}
          Luck: ${player.equipment.helmet.luk}

      Armor: ${player.equipment.armor.name}
        Stats:
          Strength: ${player.equipment.armor.str}
          Dexterity: ${player.equipment.armor.dex}
          Endurance: ${player.equipment.armor.end}
          Intelligence: ${player.equipment.armor.int}
          Luck: ${player.equipment.armor.luk}

      Weapon: ${player.equipment.weapon.name}
        Stats:
          Strength: ${player.equipment.weapon.str}
          Dexterity: ${player.equipment.weapon.dex}
          Endurance: ${player.equipment.weapon.end}
          Intelligence: ${player.equipment.weapon.int}
          Luck: ${player.equipment.weapon.luk}

      Relic: ${player.equipment.relic.name}
        Stats:
          Strength: ${player.equipment.relic.str}
          Dexterity: ${player.equipment.relic.dex}
          Endurance: ${player.equipment.relic.end}
          Intelligence: ${player.equipment.relic.int}
          Luck: ${player.equipment.relic.luk}

    Born: ${player.createdAt}\`\`\``;
  }
}
module.exports = new Helper();