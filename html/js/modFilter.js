var modFilter = {
    filters: [],
    init: function() {
        this.bindChanges();
    },
    bindChanges: function() {
        this.bindCheckboxes();
        this.bindMinMax();
    },
    bindCheckboxes: function() {
        let self = this;
        $(document).on("change", "#modTable thead input[type='checkbox']", function(){
            self.runFilter();
        })
    },
    bindMinMax: function() {
        let self = this;
        $(document).on("click",  "#modTable thead  .filter-btn", function(){
            self.runFilter();
        })
    },
    runFilter: function() {
        this.startFilter();
        let filters = this.collectFilters();
        this.makeFilters(filters);
        this.finishFilter();
    },
    startFilter: function() {
        $("#modTable tbody tr").css({'opacity':'0.5'});
    },
    finishFilter: function() {
        $("#modTable tbody tr").animate({'opacity':'1'}, 500);
    },
    collectFilters: function() {
        let self = this;
        let filters = [];
        let checkboxes = [ 'rass_tip', 'cvet_color' ];
        let minmaxs = [ 'power', 'svet_potok' ];
        for (ch in checkboxes) {
            let name = checkboxes[ch];
            let values = [];
            $("#modTable thead input[name='" + name + "[]']:checked").each(function () {
                values.push($(this).val());
            });
            if(values.length > 0) {
                if (typeof filters[name] === "undefined") {
                    filters[name] = [];
                }
                filters[name]['type'] = 'checkbox';
                filters[name]['values'] = values;
            }
        }
        for (mm in minmaxs) {
            let name = minmaxs[mm];
            let min = $("#modTable thead input[name='" + name + "[min]']").val();
            let max = $("#modTable thead input[name='" + name + "[max]']").val();
            if (min != '' || max != '') {
                if (typeof filters[name] === "undefined") {
                    filters[name] = [];
                }
                filters[name]['type'] = 'minmax';
            }
            if(min != '') {
                filters[name]['min'] = parseFloat(min).toFixed(4);
            }
            if(max != '') {
                filters[name]['max'] = parseFloat(max).toFixed(4);
            }
        }
        return filters;
    },
    makeFilters: function(filters) {
        console.log(filters);
        let self = this;
        if(Object.keys(filters).length > 0) {
            let $btn = $('.show_full a');
            self.parseRows(filters);

            if(! $btn.hasClass('active')) {
                $btn.trigger('click')
            }

        } else {
            self.showAll();
        }
    },
    parseRows: function(filters) {
        let self = this;
        $("#modTable tbody tr").each(function(){
            let flag = self.checkRow($(this), filters);
            if (flag != true) {
                $(this).addClass("hidden");
            } else {
                $(this).removeClass("hidden");
            }
        })
    },
    checkRow: function(tr, filters) {
        flag = true;
        for(f in filters) {
            let curr = tr.find("td[data-f='" + f + "']").text();
            switch(filters[f]['type']) {
                case 'checkbox':
                    let check = false;
                    for(v in filters[f]['values']) {
                        if(curr == filters[f]['values'][v]) {
                            check = true;
                        }
                    }
                    if (check != true) {
                        return false;
                    }
                    break;
                case 'minmax':
                    flag = true;
                    curr = parseFloat(curr);
                    if(typeof filters[f]['min'] != "undefined" && parseFloat(filters[f]['min']) > curr) {
                        return false;
                    }
                    if(typeof filters[f]['max'] != "undefined" && parseFloat(filters[f]['max']) < curr) {
                        return false;
                    }
                    break;
                default:
                    break;
            }

        }
        return flag;
    },
    showAll: function() {
        $("#modTable tbody tr.hidden").removeClass("hidden");
    }

};

$(document).ready(function(){
    modFilter.init();
    $(document).on("click", ".reset_filters", function(e){
        modFilter.showAll();
    })
})
