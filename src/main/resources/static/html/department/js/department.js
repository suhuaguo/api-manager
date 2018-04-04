var departmentOptions = {
    container:'#editTable',
    headers: [
        {text: '部门编号', width: '15%'},
        {text: '部门名称', width: '20%'},
        {text: '部门简述', width: '40%'},
        {text: '操作', width: '25%'}
    ],
    form: '#form',
    fields: [
        {name: 'id', type: 'input', inputDesc: '部门编号', required: false},
        {name: 'depName', type: 'input', inputDesc: '部门名称', required: false},
        {name: 'depDesc', type: 'input', inputDesc: '部门描述', required: false}
    ],
    rowButtons: [
        {type: 'update', text: '编辑', url: '/apimanager/department/update'},
        {type: 'save', text: '保存', url: '/apimanager/department/add'},
        {type: 'delete', text: '删除', url: '/apimanager/department/delete'},
        {type: 'enter', text: '进入', fn: function (param) {
            var parentId = param['id'];
            var conf = {
                container: '#container',
                url: 'html/project/project.html',
                content: "",
                async: false,
                preLoad: function (content) {
                    $("#depart").append("<li class=\"breadcrumb-item\"><a href=\"javasript:void(0)\" onclick=\"projectClick1()\">Project</a></li>");
                },
                loaded: function () {
                    var options = {
                        selector: '[name=depId]',
                        optionField: {value: 'id', text: 'depName'},
                        width: '115px',
                        url: '/apimanager/department/list'
                    }
                    api.ui.chosenSelect(options).val(parentId);
                    api.util.loadScript("html/project/js/project.js", function () {
                        api.ui.editTable(projectTableOptions);
                    });
                }
            }
            api.ui.load(conf);
        }}
    ],
    headBtn: [
        {
            type: 'add', text: '添加'
        }
    ],
    url: '/apimanager/department/findPage'
};
api.ui.editTable(departmentOptions);