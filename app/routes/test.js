import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contact-class';
import ConfirmationMixin from 'ember-onbeforeunload/mixins/confirmation';

export default Route.extend(ConfirmationMixin,{
  onUnload(){
    let m=this.modelFor(this.routeName);
    m.get('deleteds').forEach((contact)=>{
      contact.save();
    });
  },
  model(){
    return Contacts.create({datas:this.get('store').findAll('contact')});
  },
  actions:{
    edit(model,contact){
      model.set('contact',contact);
    },
    addNew(model){
      var form = document.forms.namedItem("contact-info");
      

      let contact=this.get('store').createRecord('contact',{name:model.get("FName"), firstname:model.get("FFName"), email:model.get("FEmail")});
      contact.save();
    },

    remove(contact){
      contact.destroyRecord();
    },

    cancelUpdates(model){
      model.get('deleteds').forEach((contact)=>{
        contact.rollbackAttributes();
      })
    },

    modif(){

    },
  }
});
