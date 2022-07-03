<?php
require_once __DIR__.'/BaseService.class.php';
 //require_once __DIR__.'/rest/Dao/UserDao.class.php';
 require_once __DIR__.'/../Dao/UserMembershipDao.class.php';
// C:\Bitnami\wampstack-8.1.2-0\apache2\htdocs\first\rest\Dao
class UserMembershipService extends BaseService{

  public function __construct(){
    parent::__construct(new UserMembershipDao());
  }
  public function  get_users_membership_by_id($user_id){
    return $this->dao-> get_users_membership_by_id($user_id);
  }
  public function  get_users_membership(){
    return $this->dao-> get_users_membership();
  }


}
?>
