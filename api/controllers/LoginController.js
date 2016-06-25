/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   /**
   * `LoginController.login()`
   */
  login:function(req,res){
    var id=req.param('username');
    var password=req.param('password');
    console.log(id);
    console.log(password);
    Login.findOne({username:id},function(err,found){
      if(err) return res.send(err,500);
      sails.log.debug('i am a debug messages');
      var foundness = found.password;
      console.log(foundness);
      if(password == foundness){
        res.json({login:"found"});
      }
      else{
        res.json({login:"faild"});
      }
      });
    },

	


  /**
   * `LoginController.show()`
   */
  show: function (req, res) {
    var id=req.param('id');
    console.log(id);
    Login.findOne(id,function(err,show){
      if(err){
        res.send(err,500);
      }
      console.log(show);
      res.json({Loginshow:show});
    });
  },


  /**
   * `LoginController.new()`
   */
  new: function (req, res) {
   res.view();
  },


  /**
   * `LoginController.create()`
   */
  create: function (req, res) {
    var params=req.params.all();
    Login.create(params,function(err,create){
      if(err){
        res.send(err,500);
      }
      res.json({loginnew:create});
    });
  },


  /**
   * `LoginController.edit()`
   */
  edit: function (req, res) {
   var id=req.param('id');
   Login.findOne(id,function(err,edit){
    if(err){
      res.send(err,500);
    }
    res.view({loginedit:edit});
   })
  },


  /**
   * `LoginController.update()`
   */
  update: function (req, res) {
   var params=req.params.all();
   var id=req.param('id');
   console.log(id);
   Login.update(id,params,function(err,update){

    if(err)
      res.send(err,500);
    res.json({loginupdate:update});
   }) 
  },


  /**
   * `LoginController.destroy()`
   */
  destroy: function (req, res) {
    var  id=req.param('id');
    Login.findOne(id,function(err,destroy){
      if(err){
        res.send(err,500);
      }
      Login.destroy(id,function(err,destroy){
        if(err){
          res.send(err,500);
        }
        res.json({logindestroy:"delete"});
      });
    });
  }
};

