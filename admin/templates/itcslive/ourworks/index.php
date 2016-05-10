<?php  error_reporting(0); 
 $post=IRequest::get("POST"); ?>
<div style="min-height: 601px;" id="page-content" class="clearfix ng-scope" fit-height="">
    <div style="" id="wrap" ng-view="" class="mainview-animation ng-scope">
      <div class="ng-scope" id="page-heading">
        <h1>Our Works</h1>
        <div class="options">
          <div class="btn-toolbar">
            <div class="btn-sm btn-default btn-top" dropdown="">
               <a href="index.php?view=ourworks&task=addnew">Add Works</a>
            </div>
        </div>
      </div>
      <div class="container ng-scope" ng-controller="DashboardController">
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-gray">
              <div class="panel-heading">
                <h4>Work Manager</h4>
				<form name="ourworksForm" id="ourworksForm" method="post">
                <div class="options">
					<input class="form-control" type="text" name="search_txt" value="<?php echo $post["search_txt"]; ?>" placeholder="Enter type here" />			<input type="submit" value="Go" onclick="document.ourworksForm.submit()" />	
				</div>
              </div>
              <div class="panel-body no-padding">
                <div class="table-responsive">
                  <table class="table" style="margin-bottom: 0px;">
                    <thead>
                      <tr>
                        <th class="col-xs-1 col-sm-1"><input type="checkbox" class="chk_boxes" label="check all"  /></th>
                        <th>work id</th>
                        <th>Title </th>
						 <th>Company</th>
                        <th>website</th>
						<th>Script</th>
                        <th>Created On</th>
                        <th class="col-xs-2 col-sm-2 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody class="selects">
					   <?php  foreach($this->Works as $work): ?>   
                      <tr class="ng-scope" ng-repeat="ua in accountsInRange()">
                        <td><input type="checkbox" class="chk_boxes1" name="to_select[<?php echo $work->id; ?>]"  /></td>
                         <td><?php echo $work->id; ?></td>
						<td><a href="index.php?view=ourworks&task=addnew&work_id=<?php echo (int)$work->id; ?>"><?php echo $work->title; ?></a></td>
                        <td><?php echo $work->company_name; ?></td>
						<td><?php echo $work->website; ?></td>
						<td>
						<textarea style="resize: none;" readonly rows="5" cols="20"><script type="text/javascript" src="http://www.itcslive.in/templates/itcslive/js/projectGallery.js?workid=<?php echo (int)$work->id; ?>"></script></textarea>
						</td>
                       <td><?php echo $work->created_on; ?></td>
                        <td class="text-right"><div class="btn-group">
						<span class="btn btn-xs btn-default-alt">
							<a href="index.php?view=ourworks&task=addnew&work_id=<?php echo (int)$work->id; ?>"><i class="fa fa-fw fa-pencil"></i></a></span>
                            <button class="btn btn-xs btn-default-alt" ng-click="uaHandle($index)">
							<i class="<?php echo ((int)$work->status==1) ? 'fa fa-fw fa-check': 'fa fa-fw fa-times'; ?>">
							</i></button>
							<span class="btn btn-xs btn-default-alt">
							<a title="Delete" href="index.php?view=ourworks&task=Removework&work_id=<?php echo (int)$work->id; ?>"><i class="fa fa-fw fa-times"></i></a>
							</span>
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
		<input type="hidden" name="view" value="ourworks" />
		</form>
		<div class="clear"></div>
      </div>
      <!-- container -->
    </div>
    <!--wrap -->
  </div>
  <!-- page-content -->
  <div class="clear"></div>
  