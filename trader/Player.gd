extends KinematicBody2D
const MOVE_SPEED = 500

# player save file formatting
# stocks 10/oas 43/afds 1/sfd
# money 3452
# hqs 
#
#
#

onready var area = $Area2D
var playerdata = "money 1000"

func _physics_process(delta):
	var move_dir = Vector2(Input.get_action_strength("right")-Input.get_action_strength("left"),
	-Input.get_action_strength("up")+Input.get_action_strength("down")).normalized()
	move_and_slide(move_dir* MOVE_SPEED, Vector2(0, -1))
	
func _process(delta):
	if not area.get_overlapping_areas() == []:
		for i in range(0,area.get_overlapping_areas().size()):
			# the get parent is there bc (get_overlapping_areas) returns an area it doesn't have the method
			print(str(area.get_overlapping_areas()[i].get_parent().has_method("market")) 
			+ str(rand_range(0,1000)))
