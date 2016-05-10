<?php  
	error_reporting(0); 
	$post=IRequest::get("POST");
	//print_r($this->formdata); exit;
?>
<div style="min-height: 601px;" id="page-content" class="clearfix ng-scope" fit-height="">
    <div style="" id="wrap" ng-view="" class="mainview-animation ng-scope">
      <div class="ng-scope" id="page-heading">
       <h1>Enquiry</h1>
        <div class="options">
      </div>
	  <form name="EnqueryFrm" id="TicketFrm" method="post">
      <div class="container ng-scope" ng-controller="DashboardController">
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-gray">  
			<div class="panel-heading">
				<h4>Enquiry Manager</h4>
				<h4><input type="button" name="Delete" value="delete" onclick="Enquery.multipleDelete('EnqueryFrm')" /></h4>
			</div>      
			<div class="table-responsive">
                  <table class="table" style="margin-bottom: 0px;">
                    <thead>
                      <tr>
                        <th class="col-xs-1 col-sm-1"><input type="checkbox" class="chk_boxes" label="check all"  /></th>
						<th>ID</th>
                        <th>Name </th>
                        <th>Email ID</th>
                        <th>Text</th>
						<th>Submitted On</th>
						<th>Status</th>
                        <th class="col-xs-2 col-sm-2 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody class="selects">
					   <?php  foreach($this->formdata as $ticket): ?>   
                      <!-- ngRepeat: ua in accountsInRange() -->
                      <tr class="ng-scope" ng-repeat="ua in accountsInRange()">
                        <td><input type="checkbox" class="chk_boxes1" name="to_select[<?php echo $ticket->id; ?>]" value="<?php echo $ticket->id; ?>" /></td>
						<td><?php  echo $ticket->id; ?></td>
						<td><?php echo $ticket->form_data['name']; ?></td>
                         <td><?php echo $ticket->form_data['email']; ?></td>						
                        <td><?php
								$position = strpos($ticket->form_data['message'],". ",130);
								if((int)$position > 0 && (int)$position < 200):
									echo substr($ticket->form_data['message'], 0 , $position);
								else:
									echo substr($ticket->form_data['message'], 0 , 130);
								endif;		
							?>
						</td>
						<td><?php  echo $ticket->form_submitted_on; ?></td>
						<td><button class="btn btn-xs btn-default-alt" ng-click="uaHandle($index)">
							<i class="<?php echo ((int)$ticket->status==1) ? 'fa fa-fw fa-check': 'fa fa-fw fa-times'; ?>">
							</i></button></td>
                        <td class="text-right"><div class="btn-group">
						<span class="btn btn-xs btn-default-alt">
						<?php  if($ticket->ticket_id == 0): ?>
						<a onclick='jQuery.colorbox({href:"index.php?view=enquiry&task=OpenReply&enquiry_id=<?php echo $ticket->id; ?>", iframe:true, width:"620px", height:"600px", scrolling:false, open:true, overlayClose:true});' href="javascript:void(0);" style="text-decoration:none;">Create ticket</a>
						<?php  else:  ?>
							Generated Ticket<?php echo "<br>Ticket ID : ".$ticket->ticket_id;  ?>
						<?php  endif; ?>
							</span> 
							<input type="button" onclick="Enquery.delete(<?php echo $ticket->id; ?>)" value="Delete Enquiry" /> 
                          </div></td>
                      </tr>
                      <!-- end ngRepeat: ua in accountsInRange() -->
                      <?php  endforeach; ?> 
                    </tbody>
                    <tfoot>
                      <tr class="active">
                        <td colspan="4" class="text-left" style="background: none;"><div class="clearfix">
                            <div class="pull-right">
							  <?php echo $this->Pagination; ?>
                              </div>
                          </div></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
			  </div>
            </div>
          </div>
        </div>
		<input type="hidden" name="view" value="enquiry" />
		</form>
		<div class="clear"></div>
      </div>
      <!-- container -->
    </div>
    <!--wrap -->
  </div>
  <!-- page-content -->
  <div class="clear"></div>