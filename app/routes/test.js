import Route from '@ember/routing/route';
import Contacts from 'td3/utils/contact-class';

export default Route.extend({
  model(){
    return Contacts.create({datas:this.get('store').findAll('contact')});
  },
  actions:{
    addNew(){
      let contact=this.get('store').createRecord('contact',{name:'BOB'});
      contact.save();
    },
    remove(contact){
      contact.deleteRecord();

    }
  }
});
