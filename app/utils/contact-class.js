import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  contacts:computed ('datas.@each.isDeleted', function(){
    return this.get('datas').filterBy('isDeleted', false);
  }),
  deleteds:computed('datas.@each.isDeleted', function(){
    return this.get('datas').filterBy('isDeleted',true);
  }),
  deletedsCount:computed('deleteds',function(){
    return this.get('deleteds').length;
  })
});
