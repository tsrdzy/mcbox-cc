import { createStore } from "vuex";

export default createStore({
  state: {
    copy: {},
    show: false,
    x: null,
    y: null,
    menu_file: "",
    menu: {
      "menu-settings": {
        name: "&bMCBOX &c&lChestCommands &dEditor",
        rows: 6,
        "auto-refresh": null,
        commands: [],
        "open-with-item": {
          material: "",
          "left-click": false,
          "right-click": true,
        },
      },
    },
  },
  getters: {
    get_rows(state) {
      return state.menu["menu-settings"].rows;
    },
  },
  mutations: {
    delete_card(state, xy) {
      var menu_all = JSON.parse(JSON.stringify(state.menu))
      for (let key in menu_all) {
        if (key != "" && key != undefined && key != "menu-settings") {
          if (menu_all[key]["POSITION-X"] == xy[0] && menu_all[key]["POSITION-Y"] == xy[1]) {
            delete menu_all[key]
            state.menu = {}
            state.menu = menu_all
            return
          }

        }
      }
    },
    copy_card(state, xy) {
      var menu_all = JSON.parse(JSON.stringify(state.menu))
      for (let key in menu_all) {
        if (key != "" && key != undefined && key != "menu-settings") {
          if (menu_all[key]["POSITION-X"] == xy[0] && menu_all[key]["POSITION-Y"] == xy[1]) {
            state.copy = menu_all[key]
            return
          }

        }
      }
    },
    paste_card(state, xy) {
      var menu_all = JSON.parse(JSON.stringify(state.menu))
      var k = true
      for (let key in menu_all) {
        if (key != "" && key != undefined && key != "menu-settings") {
          if (menu_all[key]["POSITION-X"] == xy[0] && menu_all[key]["POSITION-Y"] == xy[1]) {
            var r = confirm("监测到当前位置已有内容,是否继续粘贴!");
            if (r == true) {
              delete menu_all[key]
              k = true
              return
            } else {
              k = false
              return
            }

          }
        }
      }
      if (k == true) {
        var paste_copy = JSON.parse(JSON.stringify(state.copy))
        paste_copy["POSITION-X"] = xy[0]
        paste_copy["POSITION-Y"] = xy[1]
        menu_all[xy[2]] = paste_copy
        state.menu = menu_all
      }

    },
    upfile(state, files) {
      const yaml = require("js-yaml");
      const files_json = yaml.load(files, "utf-8")
      state.menu = {
        "menu-settings": {
          name: "&bMCBOX &c&lChestCommands &dEditor", rows: 6, "auto-refresh": null,
          commands: [], "open-with-item": {
            material: "", "left-click": false, "right-click": false,
          },
        }
      }
      state.menu = files_json

    },
    menu_file(state, filename) {
      state.menu_file = filename;
    },
    menu_main_updata(state, menu_main_updata) {
      state.menu["menu-settings"] = JSON.parse(
        JSON.stringify(menu_main_updata)
      );
    },
    xy(state, xy) {
      let xys = xy;
      state.x = xys[0];
      state.y = xys[1];
      xys = null;
    },
    card_exist(state, data) {
      this.show = false;
      var all_menu = JSON.parse(JSON.stringify(state.menu));
      const all_data = JSON.parse(JSON.stringify(data));
      for (let key in all_menu) {
        if (key != "menu-settings" && key != "" && key != undefined) {
          if (all_data[0] != "" && all_data[0] != undefined) {
            // all_data[1].MATERIAL = all_data[1].MATERIAL.replace('/[]/gi', '_')
            if (
              key == all_data[0] &&
              all_menu[key]["POSITION-X"] == all_data[1]["POSITION-X"] &&
              all_menu[key]["POSITION-Y"] == all_data[1]["POSITION-Y"]
            ) {
              all_menu[all_data[0]] = all_data[1];
            } else if (
              key != all_data[0] &&
              all_menu[key]["POSITION-X"] == all_data[1]["POSITION-X"] &&
              all_menu[key]["POSITION-Y"] == all_data[1]["POSITION-Y"]
            ) {
              all_menu[all_data[0]] = all_data[1];
              delete all_menu[key];
            } else {
              all_menu[all_data[0]] = all_data[1];
            }
          }
        } else if (Object.keys(all_menu).length < 2) {
          all_menu[all_data[0]] = all_data[1];
        }
      }
      state.menu = all_menu;
      all_menu = null;
    },
  },
  actions: {},
  modules: {},
});
