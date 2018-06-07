import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default Controller.extend({
    actions: {
        setSelection: function(selected) {
            this.set('selectedOption', selected)
            this.set('userSelect', true); 
        },
        submit: function(){   
            this.set('userSelect', true);     
    },     
  },
  updateModel: filter('model', function(item){
    var selectedOption = this.get('selectedOption');
    if (selectedOption === 'All'){
        return 'model';
    } else if (selectedOption === 'Rookie') {
        return item.usedEmberBefore === false && item.name !== 'Justin';
    }
    return item.catOrDog === this.get('selectedOption');
  }).property('model', 'selectedOption')
});
